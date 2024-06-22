import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const ProjectsSection = () => {
  const projects = [
    {
      name: "The ABC Buddy",
      description: "",
      image: "/",
      video: "https://www.youtube.com/embed/2kyABOgFhg4",
      github: "",
      link: "",
    },
    {
      name: "Data Insights: Patterns, Predictions, and Decisions",
      description: "",
      image: "/data1.png",
      github: "https://colab.research.google.com/",
      link: "",
    },
    {
      name: "2D Pixel Platformer",
      description:
        "",
      image: "/allienparkour.png",
      github: "",
      link: "",
    },
    {
      name: "Personal Website",
      description:
        "",
      image: "/personal_website.png",
      github: "",
      link: "https://robclintonkardinal.com/",
    },
    {
      name: "Library Website",
      description:
        "",
      image: "/librarywebsite.png",
      github: "",
      link: "",
    },
    {
      name: "Singres",
      description:
        "",
      image: "/singres.png",
      github: "",
      link: "https://singresstry.smkn12malang.sch.id",
    },
  ];

  return (
    <section id="projects">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-10 md:py-10 md:flex-row md:space-x-4 md:text-left"></div>
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                  {project.video ? (
                    <div className="relative w-full pb-9/16">
                      <iframe
                        src={project.video}
                        title={project.name}
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl hover:opacity-70"
                      />
                    </div>
                  ) : (
                    <Link href={project.link}>
                      <div className="relative w-full pb-9/16">
                        <Image
                          src={project.image}
                          alt={project.name}
                          layout="fill"
                          className="object-cover rounded-xl shadow-xl hover:opacity-70"
                        />
                      </div>
                    </Link>
                  )}

                  </div>

                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    {project.name === "The ABC Buddy" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Permainan Edukasi Multi-Sensori untuk Disleksia. ABC Buddy dipamerkan di Malang Young Innovators Award (MYIA) 2023 pada tanggal 21 Mei 2023, 
                        di Auditorium MCC, Kota Malang.{" "}
                        <br />
                      </p>
                    )}
                    
                    {project.name === "Data Insights: Patterns, Predictions, and Decisions" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Proyek ini dibuat untuk menyelesaikan sebuah Studi Kasus sebuah Perusahaan Elektronik Internet yang ingin memprediksi harga jual Produk dengan SKU (TLWR840N) 
                        pada Platfrom Tokopedia, dan Proyek ini menggunakan model Regresi Linear. {" "}
                        <br />
                      </p>
                    )}
                    

                    {project.name === "2D Pixel Platformer" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Alien Parkour, sebuah permainan platformer 2D yang dibuat dengan Godot Game Engine.{" "}
                        <br />
                      </p>
                    )}

                    {project.name === "Personal Website" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Pembuatan Personal Website Rob Clinton Kardinal, dan terdapat beberapa fitur utama yaitu Galeri Foto, Blog Terintegrasi, dan serta Panel Admin.{" "}
                        <br />
                        <a href={project.link} className="text-teal-500 hover:underline" target="blank">
                          View Live Website
                        </a>
                        !.
                      </p>
                    )}

                    {project.name === "Library Website" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Website Perpustakaan yang menggunakan arsitektur Mikroservis, dan terdapat fitur utama yaitu Autentikasi, Manajemen Akun, Profil, Manajemen Buku, Peminjaman Buku, 
                        Manajemen Peminjaman Buku, serta terdapat Panel untuk Admin, Pustakawan, dan User, 
                        dengan Frontend menggunakan ReactJS dan Backend Menggunakan NodeJS.{" "}
                        
                        <br />
                        
                      </p>
                    )}
                    {project.name === "Singres" && (
                      <p className="text-base leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        Website Singres dibuat untuk menampilkan Katalog produk produk yang dijual oleh Singres.{" "}
                        
                        <br />
                        <a href={project.link} className="text-teal-500 hover:underline" target="blank">
                          View Live Website
                        </a>
                        !.
                      </p>
                    )}

                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
