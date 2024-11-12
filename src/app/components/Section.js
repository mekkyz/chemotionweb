const Section = ({ id, title, children }) => (
    <section id={id} className="py-20">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
  
  export default Section;