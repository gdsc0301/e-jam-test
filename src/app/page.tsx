import Header from './components/Header'
import Footer from './components/Footer'
import ThirdStep from './checkout/ThirdStep'
import { getDictionary } from './helpers/Dict';

export default async function Home() {
  const dict = await getDictionary();

  return (
    <main>
      <Header dictionary={dict} />
      <ThirdStep dictionary={dict} />
      <Footer dictionary={dict} />
    </main>
  )
}
