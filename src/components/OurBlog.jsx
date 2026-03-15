import React from "react";

function OurBlog() {
  return (
    <section class="bg-bgColor py-10 md:py-16">
      <div class="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div class="flex flex-col items-center justify-center text-center mb-8">
          <h5 class="text-green-500 uppercase tracking-wider font-semibold mb-2">
            Our Blog
          </h5>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-4">
            Voices &amp; Influence
          </h1>
          <p class="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            Dive into our{" "}
            <em class="font-medium text-green-700">blog articles</em> to explore
            the world of voice communication, audio branding, and the rising
            power of influencers. Learn how{" "}
            <strong class="font-semibold text-gray-800">
              sound shapes connection, storytelling, and digital impact
            </strong>{" "}
            in today's modern landscape.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
