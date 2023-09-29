import ThirdStep from './checkout/ThirdStep'
import { getDictionary } from './helpers/Dict';

export default async function Home() {
  const dict = await getDictionary();

  return (
    <>
      <ThirdStep dictionary={dict} />
    </>
  )
}
