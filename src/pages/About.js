import React, { useEffect, useState } from "react";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import sanityClient from "../client";
import grey from "../assets/grey wood.jpg";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative">
      <img src={grey} alt="grey background" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey <span className="text-green-100">{author.name}</span> here
            </h1>
            <div className="text-green-200 text-lg">
              <BlockContent
                blocks={author.bio}
                projectId="ph4hgpxb"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
