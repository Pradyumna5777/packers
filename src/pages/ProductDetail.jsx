import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "../data/products";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import { Helmet } from "react-helmet";
import { Mail, MessageCircle } from "lucide-react";

const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const product = allProducts.find((p) => slugify(p.name) === slugify(name));

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setSelectedImage(product.images[0]); // Set first image as default
    } else if (product?.image) {
      setSelectedImage(product.image); // fallback
    }
  }, [product]);

  if (!product) {
    return (
      <div className="p-6 text-red-600 text-center text-lg">
        Product not found.
      </div>
    );
  }

  const whatsappNumber = "919878165432";
  const message = `Hello, I'm interested in learning more about ${product.name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  const emailLink = `mailto:thermopackers@gmail.com?subject=Product Enquiry: ${encodeURIComponent(
    product.name
  )}&body=I am interested in learning more about ${product.name}.`;

  return (
    <>
      <Helmet>
        <title>{product.name} | Thermo Packers</title>
      </Helmet>

      <section className="mt-[10vh] px-6 py-10 max-w-7xl mx-auto">
        <FloatingWhatsApp />

        <div className="md:hidden mb-6">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back to previous page"
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start animate-fade-in">
          {/* IMAGE VIEWER */}
          <div className="w-full">
            <div className="overflow-hidden rounded-3xl shadow-lg mb-4">
              <img
                src={selectedImage}
                alt={product.name || "Product Image"}
                className="w-full h-[22rem] md:h-[28rem] object-contain bg-white transition duration-300"
              />
            </div>

            {/* THUMBNAILS */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`h-20 w-20 object-cover rounded-xl border cursor-pointer ${
                      img === selectedImage
                        ? "ring-2 ring-[#B0BC27]"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
            <p className="text-2xl font-semibold text-[#B0BC27]">
              {product.price}
            </p>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-xl mt-6 border border-gray-300">
              <p className="text-2xl font-black text-gray-800 tracking-wide mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#B0BC27] animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m0 0l-4-4m4 4l4-4"
                  />
                </svg>
                Enquire Now
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={emailLink}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                >
                  <Mail size={20} />
                  Email Us
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
