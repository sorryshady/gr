import FadeIn from '../animations/fade-in'
import Container from '../layout/container'

const TaglineQuote = ({ testimonial }: { testimonial: string }) => {
  return (
    <Container className="mx-auto mt-5 max-w-4xl">
      <FadeIn>
        <div className="mx-auto w-full rounded-4xl bg-amber-100/50 p-10 px-6 text-center">
          <blockquote className="text-primary/80 mb-8 text-3xl leading-relaxed font-medium italic md:text-4xl">
            &ldquo;{testimonial}&rdquo;
          </blockquote>
          <div className="bg-primary mx-auto h-1 w-24"></div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default TaglineQuote
