export interface InstagramPhoto {
  image: string;
  caption?: string;
  permalink: string;
}

interface BeholdSize {
  mediaUrl: string;
  width: number;
  height: number;
}

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  prunedCaption?: string;
  sizes: {
    small: BeholdSize;
    medium: BeholdSize;
    large: BeholdSize;
    full: BeholdSize;
  };
}

interface BeholdFeed {
  username: string;
  posts: BeholdPost[];
}

const FEED_ID = process.env.BEHOLD_FEED_ID;
const MAX_CAPTION_LENGTH = 140;

function truncateCaption(caption?: string): string | undefined {
  if (!caption) return undefined;
  const trimmed = caption.trim();
  if (!trimmed) return undefined;
  if (trimmed.length <= MAX_CAPTION_LENGTH) return trimmed;
  return `${trimmed.slice(0, MAX_CAPTION_LENGTH).trimEnd()}…`;
}

/**
 * Fetches the Instagram feed configured on behold.so.
 * Returns null when BEHOLD_FEED_ID isn't set or the feed can't be reached,
 * so callers can fall back to static gallery content.
 */
export async function getInstagramPhotos(): Promise<InstagramPhoto[] | null> {
  if (!FEED_ID) return null;

  try {
    const response = await fetch(`https://feeds.behold.so/${FEED_ID}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const feed: BeholdFeed = await response.json();

    return feed.posts.map((post) => ({
      image: post.sizes.large?.mediaUrl ?? post.sizes.medium.mediaUrl,
      caption: truncateCaption(post.prunedCaption || post.caption),
      permalink: post.permalink,
    }));
  } catch {
    return null;
  }
}
