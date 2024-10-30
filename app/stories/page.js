import React from "react";
import Header from "../Components/Header";
import StoryCard from "../Components/StoryCard";
function page() {
  const demoStories = [
    {
      id: 1,
      ProfileImg:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      DisplayName: "The Coffee Lover",
      Story:
        "I love coffee so much that I drink it every day. It's my favorite drink in the world!",
    },
    {
      id: 2,
      ProfileImg:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      DisplayName: "The Coffee Hater",
      Story:
        "I can't stand coffee. It's too bitter for my taste. I prefer tea or hot chocolate.",
    },
    {
      id: 3,
      ProfileImg:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      DisplayName: "The Coffee Addict",
      Story:
        "I drink coffee all day long. I can't function without it. It's like my lifeblood.",
    },
    {
      id: 4,
      ProfileImg:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      DisplayName: "The Coffee Connoisseur",
      Story:
        "I'm a coffee snob. I only drink the finest, most expensive coffee beans. Anything less is unacceptable.",
    },
    {
      id: 5,
      ProfileImg:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      DisplayName: "The Coffee Newbie",
      Story:
        "I'm just getting into coffee. I'm still trying to figure out what I like and don't like. It's a fun journey!",
    },
  ];

  return (
    <div>
      <Header />
      <section className="flex flex-col gap-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl text-center">
          What&apos;s brewing in the community?
        </h2>
        <div className="w-screen h-auto grid lg:grid-cols-3 gap-4 px-8">
          {demoStories.map((story) => (
            <StoryCard
              key={story.id}
              imgSrc={story.ProfileImg}
              displayName={story.DisplayName}
              content={story.Story}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
export default page;
