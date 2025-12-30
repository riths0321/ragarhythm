import { useEffect } from 'react';

const SEO = ({
    title = 'RagaRhythm — Where Tradition Meets Beats', // Matching Hero Text
    description = 'Discover the soul of Indian classical fusion. From ancient ragas to modern beats, we explore the rhythm of tradition.',
    keywords = 'indian classical music, raga fusion, sitar lofi, coke studio analysis, contemporary classical, music journalism',
    image = '/og-image.jpg',
    type = 'website'
}) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    useEffect(() => {
        // 1. Update Document Title
        document.title = title;

        const updateMeta = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Basic Meta
        updateMeta('description', description);
        updateMeta('keywords', keywords);
        updateMeta('author', 'RagaRhythm');
        updateMeta('theme-color', '#EA580C'); // Orange-600 (Image match)

        // Open Graph
        updateMeta('og:title', title, true);
        updateMeta('og:description', description, true);
        updateMeta('og:image', image, true);
        updateMeta('og:url', url, true);
        updateMeta('og:type', type, true);
        updateMeta('og:site_name', 'RagaRhythm');

        // Twitter
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', title);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', image);
        updateMeta('twitter:site', '@RagaRhythm');

        return () => {
            document.title = 'RagaRhythm';
        };
    }, [title, description, keywords, image, url, type]);

    return null;
};

export default SEO;