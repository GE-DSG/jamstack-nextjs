
const MISSING_FILENAME_MESSAGE =
  'createRemarkButton must be given `filename(form): string`'
const MISSING_FIELDS_MESSAGE =
  'createRemarkButton must be given `fields: Field[]` with at least 1 item'



export class ReportCreatorPlugin {
  __type = 'content-creator'
  name
  fields
  // Json Specific
  filename


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
  }



  async onSubmit(form, cms) {

    const fileRelativePath = await this.filename(form)

    const res = await cms.api.github.upload(fileRelativePath, JSON.stringify(form), `Commit from Tina: Upload ${fileRelativePath}`, false)
  }
}

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
      name: 'hero_image',
      component: "group",
      fields: IMAGE_FIELDS,
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

})

