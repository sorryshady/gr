import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { IMAGES } from '@/lib/constants'
import { formatImageUrl } from '@/lib/utils'

const ShowcaseSection = () => {
  const links = IMAGES.map(image => formatImageUrl(image, 1200, 800))
  return (
    <Container
      className="flex items-center justify-center"
      id="capabilities"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center px-5">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h2 className="text-primary text-4xl font-medium md:text-5xl">Event Showcase</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">
              Visual highlights from our signature events, showcasing the quality and attention to detail that defines
              our work.
            </p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-3 md:p-5">
          {links.map((link, index) => (
            <div
              className="relative h-[500px] w-1/3 overflow-hidden lg:w-3xl"
              key={index}
            >
              <div className="relative size-full overflow-hidden">
                <img
                  src={link}
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ShowcaseSection
