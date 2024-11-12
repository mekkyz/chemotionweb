export default {
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: "Electronic Laboratory Notebook (ELN)", // Default title
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      initialValue: `The Chemotion ELN was designed for chemists and adapted to the special
requirements of chemical laboratory work and documentation. It
therefore serves as a digitalization instrument for work in chemistry,
developed to overcome the current limitations of the existing systems.
To reach this goal, the development, improvement, and extension of the
ELN is a community effort. It is completely open-source.`,
    },
    {
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube URL',
      initialValue: 'https://www.youtube.com/embed/tZHaP6DW-Dw?si=EMcfABUZvgPgQdij&amp;controls=0',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Optional image for the Section',
      options: {
        hotspot: true,
      },
    },
  ],
};
