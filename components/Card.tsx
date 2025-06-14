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
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import dayjs from "dayjs";
export function BlogCard({ item }: { item: Posts }) {
  let getDate = dayjs(item.date).format("DD MMMM, YYYY");

  return (
    <Card
      key={item.id}
      className="item-center rounded-sm transition-shadow hover:shadow-lg"
    >
      <CardContent className="item-center p-6">
        <Link href={`/read/${item.slug}`}>
          <CardTitle className="mb-2 text-lg font-semibold text-foreground">
            {item.title}
          </CardTitle>
        </Link>
        <Link href={`/read/${item.slug}`}>
          <CardDescription className="mb-4 text-sm text-card-foreground">
            {item.description}
          </CardDescription>
        </Link>
        <div className="flex items-center justify-between text-sm text-card-foreground">
          <div className="flex items-center gap-2">
            <span>{item.author}</span>
          </div>
          <time className="font-medium" title={item.date}>
            {" "}
            {getDate}
          </time>
        </div>
      </CardContent>
    </Card>
  );
}
