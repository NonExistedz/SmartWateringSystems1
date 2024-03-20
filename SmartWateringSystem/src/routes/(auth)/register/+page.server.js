import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import path from 'path';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const [email, password, confirmPassword] = [data.get('email'), data.get('password'), data.get('confirm-password')]
    if(password != confirmPassword) {
      return fail(400, { mismatch: true })
    }
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if(!user) {
      await prisma.user.create({
        data: {
          email,
          password
        }
      })
      cookies.set('email', email, {
        path: '/',
        httpOnly: false
      })
      redirect(301, '/')
    } else {
      return fail(400, { exists: true })
    }
  }
}