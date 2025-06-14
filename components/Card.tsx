import Image from "next/image";
import Link from "next/link";
import type { Posts } from "@/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BlogCard({ item }: { item: Posts }) {
  let getDate = dayjs(item.date).format("DD MMMM, YYYY");
  return (
    <Card
      key={item.id}
      className="relative rounded-sm border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex-row dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-blue-800/15 to-transparent"></div>
      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://pageui.shipixen.com/_next/image?url=%2Fstatic%2Fimages%2Fpeople%2F2.webp&w=1920&q=75" />
              <AvatarFallback>{item.author} </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {item.author}
            </span>
          </div>

          <time
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
            title={item.date}
          >
            {getDate}
          </time>
        </div>
        <Link href={`/read/${item.slug}`}>
          <CardTitle className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
            {item.title}
          </CardTitle>
        </Link>
        <Link href={`/read/${item.slug}`}>
          <CardDescription className="line-clamp-3 text-gray-600 dark:text-gray-300">
            {item.description}
          </CardDescription>
        </Link>
        <div className="mt-auto flex flex-wrap justify-between gap-4 pt-4">
          <span className="flex-shrink-0 py-0.5 text-sm text-gray-500 dark:text-gray-400">
            5 min read
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {item.tags.map((item, index) => (
              <Badge
                key={index}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <div className="absolute bottom-0 left-0 h-24 w-24 rotate-180 rounded-bl-full bg-gradient-to-bl from-blue-800/15 to-transparent"></div>
    </Card>
  );
}
