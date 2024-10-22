import React from "react";

const logo = new URL('../assets/images/favicon-white.ico', import.meta.url);


const PrivacyPolicy = () => {

  return (
        <main class="container mx-auto px-4 py-8">
          <section class="relative">
            <img
          src={logo}
              alt="1918 WSP" 
              class="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-full border-4 border-gray-500"
            />
            <article class="prose max-w-full">
              <h2 class="text-xl font-bold mb-4">Introduction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros
                eget nisl fringilla commodo. Morbi egestas eros nec nulla tempor, ac
                venenatis libero hendrerit.
              </p>

              <h2 class="text-xl font-bold mt-8 mb-4">Information Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
                ligula id eros scelerisque aliquet. Vivamus nec erat ac lorem congue
                sodales ut in massa.
              </p>

              <h2 class="text-xl font-bold mt-8 mb-4">Usage of Information</h2>
              <p>
                Sed ac viverra nisi, vel pulvinar nulla. Quisque ut lacinia nulla. Nullam
                interdum ex eu dolor bibendum, at congue justo fermentum. Suspendisse
                nec urna velit. Cras lobortis lectus sit amet enim aliquam, in maximus
                eros sagittis.
              </p>

              <h2 class="text-xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                Phasellus aliquam enim sit amet orci gravida scelerisque. Curabitur ut
                dapibus lectus. Nullam vehicula odio ut nunc convallis, ac feugiat risus
                volutpat.
              </p>

              <h2 class="text-xl font-bold mt-8 mb-4">Changes to the Privacy Policy</h2>
              <p>
                Nulla facilisi. Aliquam ac diam et metus posuere convallis non non orci.
                Mauris accumsan libero ac sollicitudin ultricies. Etiam ut metus eget
                libero ultrices posuere in nec metus.
              </p>
            </article>
          </section>
        </main>
  );
};

export default PrivacyPolicy;
