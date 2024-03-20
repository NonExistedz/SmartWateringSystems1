import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const [pwOld, pwNew, pwNewConfirm] = [data.get('password-old'), data.get('password-new'), data.get('password-new-confirm')]
    const email = cookies.get("email")
    if(!email) {
      return redirect(301, '/login');
    }
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    console.log(user)
    if(user.password == pwOld) {
      if(pwNew == pwNewConfirm) {
        await prisma.user.update({
          where: {
            email
          },
          data: {
            password: pwNew
          }
        })
        return { success: true }
      } else {
        return fail(400, { mismatch: true })
      }
    } else {
      return fail(400, { invalid: true })
    }
  }
}