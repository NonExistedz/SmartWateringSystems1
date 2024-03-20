import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const [email, password] = [data.get('email'), data.get('password')]
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    console.log(user)
    if(user.password == password) {
      cookies.set('email', email, {
        path: '/',
        httpOnly: false
      })
      redirect(301, '/')
    } else {
      return fail(400, { invalid: true })
    }
  }
}