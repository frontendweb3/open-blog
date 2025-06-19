import { Instagram, Linkedin, Twitter } from "@/components/icons";
import { IconBack } from "@/components/icons/back";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { posts as allPosts } from "@/data/posts";
import { GetPost } from "@/data";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import { getDomain } from "@/lib/getDomain";
import { Share } from "@/components/Share";
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = GetPost(slug);

  if (!post) {
    notFound();
  }

  return { title: post.title };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = GetPost(slug);

  if (!post) {
    notFound();
  }
  const getTag = post.tags[0]?.toLocaleLowerCase().trim().replaceAll(" ", "-");

  const getAuthor = post.author
    ?.toLocaleLowerCase()
    .trim()
    .replaceAll(" ", "-");
  const getDate = dayjs(post.date).format("DD MMM YYYY");
  return (
    <div className="mx-auto border-r border-l px-8 py-12 md:p-24 lg:w-[1280px]">
      <div className="container grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
        {/* share it */}
        <Share title={post.title} slug={post.slug} />

        {/* aricle main */}
        <article className="col-span-4 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-3">
            <div className="text-md flex flex-wrap items-center gap-2 font-medium">
              <span>Published on </span>
              <time
                className="mx-1 text-base font-light"
                dateTime={post.date.toString()}
                title={getDate}
              >
                {getDate}
              </time>{" "}
              <span>·</span>
              <Link href={`/tags/${getTag}`} className="font-medium">
                {post.category}
              </Link>
            </div>
            <h1 className="mb-2 text-3xl font-extrabold lg:mb-6 lg:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-row items-center gap-x-4">
              <Avatar className="outline">
                <AvatarImage src={"/images/user.png"} />
                <AvatarFallback>{post.author}</AvatarFallback>
              </Avatar>
              <Link
                className="font-medium text-card-foreground"
                href={`/author/${getAuthor}`}
              >
                {post.author}{" "}
              </Link>
            </div>
            <p className="text-xl font-medium">{post.description}</p>
          </div>
          {/* image */}
          <div className="relative h-[464px] w-full p-5">
            <Image
              src={
                "https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_960_720.jpg"
              }
              alt="image is here"
              fill={true}
              quality={100}
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          {/* content */}
          <div className="prose max-w-4xl prose-stone lg:prose-sm dark:prose-invert">
            <p>
              Cupidatat voluptate deserunt non ea exercitation sit consequat
              ullamco ex nostrud elit magna. Nulla id proident labore pariatur
              pariatur ex ut ad enim et labore.
            </p>
            <h2>
              <a id="Est_do_minim_eiusmod_culpa_2"></a>Est do minim eiusmod
              culpa.
            </h2>
            <p>
              <a href="https://google.com">
                Culpa laboris aliquip ea consectetur
              </a>{" "}
              mollit ea ipsum sint qui culpa laboris dolor adipisicing proident.
              Et officia consequat do nulla tempor cupidatat elit. Consequat
              proident magna dolor labore et esse aute dolor sit ea.
            </p>
            <p>
              Sint amet deserunt commodo aute consectetur Lorem qui aliqua
              tempor nulla. `Velit non` ea qui aliquip. Qui laborum labore
              excepteur duis velit velit enim enim veniam.
            </p>
            <blockquote>
              <p>
                Pariatur laboris commodo est laboris. In incididunt pariatur
                aliquip ut elit irure magna anim sunt. Anim labore ut sit magna
                ex proident dolor anim cupidatat adipisicing.
              </p>
            </blockquote>
            <h2>
              <a id="5_things_9"></a>5 Things
            </h2>
            <ul>
              <li>Minim est mollit commodo ad sit quis.</li>
              <li>
                Tempor id magna eu veniam sint et mollit magna laboris
                reprehenderit Lorem proident.
              </li>
              <li>Laborum id sint ex magna nulla est labore non.</li>
              <li>
                Pariatur qui qui ex duis nulla et aute magna incididunt
                cupidatat commodo.
              </li>
              <li>Sint amet deserunt commodo aute consectetur.</li>
            </ul>
            <p>
              Aliquip veniam aliquip nisi non amet pariatur quis. Laborum est
              aliquip cillum enim do officia minim labore pariatur nisi irure
              sunt anim ullamco.
            </p>
            <h2>
              {" "}
              <a id="What_is_Lorem_Ipsum__Meaning_18"></a>What is Lorem Ipsum
              Meaning ?
            </h2>
            <p>
              Sint qui enim non Lorem aliquip nulla sint. Aute laborum tempor
              adipisicing officia magna fugiat sint cupidatat. Enim Lorem
              officia anim cillum ea tempor dolore voluptate:
            </p>
            <ul>
              <li>
                <strong>Excepteur aliqua</strong> minim Lorem officia ullamco
                pariatur.
              </li>
              <li>
                <strong>Fugiat</strong> sint pariatur tempor ullamco sit ea
                excepteur sint ut qui excepteur dolore anim.
              </li>
              <li>
                <strong>Eiusmod</strong> id dolor sit fugiat eu eiusmod tempor
                proident.
              </li>
              <li>
                <strong>Officia enim</strong> dolore excepteur proident
                incididunt et sint. Non laboris veniam nisi adipisicing magna.
              </li>
            </ul>
            <p>
              Nulla ut irure aliqua ex aliquip nisi non amet excepteur ipsum
              laboris voluptate elit. Aliquip proident magna Lorem amet esse
              laborum cillum. Culpa aute laborum velit velit in do. Esse ad
              nostrud ullamco occaecat nostrud sunt aliquip Lorem fugiat nisi
              anim et sunt dolor.
            </p>
            <h2>
              {" "}
              <a id="Voluptate_tempor_28"></a>Voluptate tempor
            </h2>
            <p>
              Nisi ad aliquip minim quis cupidatat eu minim voluptate tempor
              consequat irure eu. Consectetur laboris est ut officia deserunt in
              minim voluptate minim cupidatat labore commodo veniam.
            </p>
            <ul>
              <li>Commodo deserunt cupidatat</li>
              <li>Deserunt commodo est</li>
              <li>Lorem eiusmod proident</li>
              <li>Sunt sit voluptate</li>
            </ul>
            <h2>
              {" "}
              <a id="Conclusion_36"></a>Conclusion
            </h2>
            <p>
              Consectetur aliqua eu veniam consequat eu adipisicing id ullamco
              incididunt. Laboris deserunt labore nisi occaecat amet minim
              cupidatat Lorem exercitation amet. Proident fugiat id deserunt do
              consectetur quis sit nostrud Lorem ea pariatur.
            </p>
            <p>
              {" "}
              Occaecat et esse sunt dolore nisi aliquip et non do sint. Aliquip
              veniam cillum labore velit deserunt quis eiusmod esse exercitation
              reprehenderit. Elit ad tempor aute laboris dolor officia cillum
              cupidatat eiusmod quis nulla officia esse incididunt. Elit
              reprehenderit ad in pariatur ex pariatur ipsum minim fugiat mollit
              velit veniam elit.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
