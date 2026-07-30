import Container from "./Container";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="py-24">
      <Container>
        {(title || subtitle) && (
          <div className="mb-14 text-center">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
};

export default Section;