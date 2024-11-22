import Image from "next/image"
import Link from "next/link";
import type { Posts } from "@/type";
import {
  Card as CardBox,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Card({ item }: { item: Posts }) {

  return (
    <CardBox className="max-w-full mt-10 rounded-sm">
      <CardHeader>
        <div className="relative h-44">
          <Image
            alt={item.title}
            src={item.image}
            fill
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex mb-3">
          <p className="text-sm text-primary">Published on Mar 10, 2023 </p>
        </div>
        <Link className="text-lg" href={`/read/${item.slug}`}>
          <CardTitle className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-1xl">{item.title}</CardTitle>
        </Link>
        <CardDescription className="mt-4 text-muted-foreground md:mb-4 lg:mt-6 truncate">{item.description} </CardDescription>
      </CardContent>
    </CardBox>
  )
}
