import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  console.log(cookies.get('email'))
  if(cookies.get('email')) {
    redirect(301, 'login')
  }
}