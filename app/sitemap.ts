import type { MetadataRoute } from "next";

import { jobs } from "@/data/jobs";
import { posts } from "@/data/posts";
import { businesses } from "@/data/businesses";
import { governmentServices } from "@/data/government";
import { temples } from "@/data/temples";
import { transportServices } from "@/data/transport";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nammaattur.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-attur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tourist-places`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/businesses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/government`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/temples`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/emergency`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/transport`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.id}`,
    lastModified: new Date(job.postedDate),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const newsPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/news/${post.id}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const businessPages: MetadataRoute.Sitemap = businesses.map(
    (business) => ({
      url: `${baseUrl}/businesses/${business.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const governmentPages: MetadataRoute.Sitemap =
    governmentServices.map((service) => ({
      url: `${baseUrl}/government/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const templePages: MetadataRoute.Sitemap = temples.map((temple) => ({
    url: `${baseUrl}/temples/${temple.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const transportPages: MetadataRoute.Sitemap =
    transportServices.map((service) => ({
      url: `${baseUrl}/transport/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const eventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.id}`,
    lastModified: new Date(event.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...jobPages,
    ...newsPages,
    ...businessPages,
    ...governmentPages,
    ...templePages,
    ...transportPages,
    ...eventPages,
  ];
}