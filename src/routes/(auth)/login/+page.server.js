import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { hash } from '$lib/hash';

export const actions = {
    default: async({ cookies, request }) => {
        const data = await request.formData();
        const [email, password] = [data.get('email'), data.get('password')]
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) return fail(400, { invalid: true })

        if (user.password == hash(password)) {
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