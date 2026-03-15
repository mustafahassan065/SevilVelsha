import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { blogPosts } from "../data/blogPosts";

const SITE_NAME = "Sevil Velsha";
const SITE_URL = "https://lustrous-arithmetic-06343d.netlify.app";
const DEFAULT_IMAGE = "https://lustrous-arithmetic-06343d.netlify.app/images/coaching.png";
const TWITTER_HANDLE = "@sevilVelsha";

function upsertMetaByName(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(payload) {
  let el = document.getElementById("seo-jsonld");
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("id", "seo-jsonld");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

function SeoManager() {
  const { pathname } = useLocation();

  const seo = useMemo(() => {
    const base = {
      title: `${SITE_NAME} - Voice of Influence`,
      description:
        "Discover Sevil Velsha, a voice and identity expert helping leaders and professionals communicate with confidence and authenticity.",
      keywords:
        "Sevil Velsha, Voice Coach, Public Speaking, Leadership Communication, Executive Coaching, Personal Branding",
      image: DEFAULT_IMAGE,
      type: "website",
      canonical: `${SITE_URL}${pathname}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    };

    if (pathname === "/") {
      return base;
    }

    if (pathname === "/contact") {
      return {
        ...base,
        title: `Contact | ${SITE_NAME}`,
        description:
          "Contact Sevil Velsha for speaking bookings, partnerships, and coaching inquiries.",
      };
    }

    if (pathname === "/book-session") {
      return {
        ...base,
        title: `Book Session | ${SITE_NAME}`,
        description:
          "Schedule your voice coaching session with Sevil Velsha. Select session type, date, and time.",
      };
    }

    if (pathname === "/blogs") {
      return {
        ...base,
        title: `Blogs | ${SITE_NAME}`,
        description:
          "Read the latest voice coaching and communication insights from Sevil Velsha.",
      };
    }

    if (pathname.startsWith("/blogs/")) {
      const slug = pathname.replace("/blogs/", "");
      const post = blogPosts.find((item) => item.slug === slug);
      if (!post) return base;

      return {
        ...base,
        title: `${post.title} | ${SITE_NAME}`,
        description: post.excerpt,
        image: post.image || DEFAULT_IMAGE,
        type: "article",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: [post.image || DEFAULT_IMAGE],
          datePublished: "2025-11-30",
          author: {
            "@type": "Person",
            name: SITE_NAME,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
          },
          mainEntityOfPage: `${SITE_URL}${pathname}`,
        },
      };
    }

    return base;
  }, [pathname]);

  useEffect(() => {
    document.title = seo.title;
    upsertCanonical(seo.canonical);

    upsertMetaByName("description", seo.description);
    upsertMetaByName("keywords", seo.keywords);
    upsertMetaByName("robots", "index, follow");
    upsertMetaByName("author", SITE_NAME);
    upsertMetaByName("creator", SITE_NAME);
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:site", TWITTER_HANDLE);
    upsertMetaByName("twitter:title", seo.title);
    upsertMetaByName("twitter:description", seo.description);
    upsertMetaByName("twitter:image", seo.image);

    upsertMetaByProperty("og:type", seo.type);
    upsertMetaByProperty("og:title", seo.title);
    upsertMetaByProperty("og:description", seo.description);
    upsertMetaByProperty("og:url", seo.canonical);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:locale", "en_US");
    upsertMetaByProperty("og:image", seo.image);
    upsertMetaByProperty("og:image:alt", seo.title);
    upsertMetaByProperty("og:image:width", "1200");
    upsertMetaByProperty("og:image:height", "630");

    upsertJsonLd(seo.jsonLd);
  }, [seo]);

  return null;
}

export default SeoManager;

