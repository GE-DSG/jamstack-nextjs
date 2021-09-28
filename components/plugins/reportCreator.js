const MISSING_FILENAME_MESSAGE =
  'Filename must be defined `filename(form): string`'
const MISSING_FIELDS_MESSAGE =
  'Report fields must be defined `fields: Field[]` with at least 1 item'


export class ReportCreatorPlugin {
  __type = 'content-creator'
  name
  fields
  filename
  //data
  //frontmatter

  constructor(options) {
    if (!options.filename) {
      console.error(MISSING_FILENAME_MESSAGE)
      throw new Error(MISSING_FILENAME_MESSAGE)
    }

    if (!options.fields || options.fields.length === 0) {
      console.error(MISSING_FIELDS_MESSAGE)
      throw new Error(MISSING_FIELDS_MESSAGE)
    }

    this.name = options.label
    this.fields = options.fields
    this.filename = options.filename
    //this.data = options.data
    //this.frontmatter = options.frontmatter
  }



  async onSubmit(form, cms) {

    const fileRelativePath = await this.filename(form)

    form.hero_image = {
      src: form.hero_image_src,
      alt: form.hero_image_alt,
    }
    delete form.hero_image_src
    delete form.hero_image_alt
    form.date = new Date()

    const res = await cms.api.github.githubFileApi(
      fileRelativePath,
      JSON.stringify(form),
      `Commit from Tina: Create new file ${fileRelativePath}`,
      false,
      'PUT', // Add File
    )
  }
}

/*
export const IMAGE_FIELDS = [
  {
    name: "src",
    label: "Image Source",
    component: "image",
    parse: media => `/static/${media.filename}`,
    uploadDir: () => '/public/static/',
    previewSrc: fullSrc => fullSrc.replace('/public', '')
  },
  {
    name: "alt",
    label: "Alt Text",
    component: "text",
  },
]
*/

export const CreateReportPlugin = new ReportCreatorPlugin({

  label: 'Add New Report',
  filename: form => {
    const slug = form.title.replace(/\s+/g, '-').toLowerCase()
    return `content/reports/${slug}.json`
  },
  fields: [
    {
      label: 'ID',
      name: 'id',
      component: 'text',
      validation(id) {
        if (!id) return 'Required.'
      },
    },
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      validation(title) {
        if (!title) return 'Required.'
      },
    },
    {
      label: 'Hero image',
      name: 'hero_image_src',
      component: "image",
      parse: media => `/static/${media.filename}`,
      uploadDir: () => '/public/static/',
      previewSrc: fullSrc => fullSrc.replace('/public', '')
    },
    {
      label: 'Alternate text',
      name: 'hero_image_alt',
      component: "text",
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today.',
      dateFormat: 'MMMM DD, YYYY',
      timeFormat: false,
    },
    {
      label: 'Author',
      name: 'author',
      component: 'text',
    },
    {
      label: 'Body',
      name: 'body',
      component: 'html',
    },
  ],
/*
  data: form => {
    title: `${form.title}`
    id: `${form.id}`
    title: `${form.title}`
    date: `${form.date}`
    author: `${form.author}`
    body: `${form.body}`
  },
  frontmatter: postInfo => ({
    id: postInfo.id,
    title: postInfo.title,
    date: new Date(),
    author: postInfo.author,
    body: postInfo.body,
  }),
*/
})
