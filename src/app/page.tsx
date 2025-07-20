import Copy from '@/components/ui/copy/copy'
import Heading from '@/components/ui/heading/heading'

export default function Home() {
  return (
    <div>
      <Copy>
        <h1 className="text-5xl font-bold">Home Page</h1>
      </Copy>
      <Copy>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Copy>
      <Heading
        text="What We Do"
        type="h2"
      />
      <Heading
        text="About"
        type="h2"
      />
      <Heading
        text="Contact"
        type="h2"
      />
      <Heading
        text="Studio"
        type="h2"
      />
    </div>
  )
}
