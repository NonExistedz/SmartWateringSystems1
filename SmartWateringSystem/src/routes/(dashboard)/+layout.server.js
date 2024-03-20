import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    if (!cookies.get('email')) {
        redirect(301, '/login')
    } else {
        return {
            email: cookies.get('email')
        }
    }
}