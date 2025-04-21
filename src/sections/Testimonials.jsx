import { twMerge } from "tailwind-merge";

 const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended.",
    name: "Erica Wyatt",
    title: "Product Designer",
    avatarImage: "/assets/images/avatar-2.jpg",
  },
  {
    text: "This service changed the way we work. Speed, reliability, and top-notch support every step of the way.",
    name: "Michael Lee",
    title: "CTO, TechCorp",
    avatarImage: "/assets/images/avatar-1.jpg",
  },
  {
    text: "Intuitive interface and robust features. It’s exactly what our team needed to boost productivity.",
    name: "Sofia Ramirez",
    title: "Project Manager",
    avatarImage: "/assets/images/avatar-3.jpg",
  },
];


const Testimonials = () => {
  return (
    <section className="text-amber-50 py-32 bg-zinc-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((t, index) => (
            <blockquote key={index} className={twMerge(index === 2 && "md:hideen lg:block")}>
              <p className="font-heading text-3xl font-black">
                &ldquo;{t.text}&ldquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <img
                    src={t.avatarImage}
                    alt={`${t.name} 的头像`}
                    className="size-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-lg font-black not-italic">
                      {t.name}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {t.title}
                    </div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
