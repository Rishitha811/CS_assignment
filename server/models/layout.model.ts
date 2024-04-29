import mongoose, { Schema, Document, Model } from "mongoose";

interface FaqItem extends Document {
  question: string;
  answer: string;
}

interface Category extends Document {
  title: string;
}

interface BannerImage extends Document {
  public_id: string;
  url: string;
}

interface Layout extends Document {
  type: string;
  faq: FaqItem[];
  categories: Category[];
  banner: {
    image: BannerImage;
    title: string;
    subtitle: string;
  };
}

const faqSchema = new Schema<FaqItem>({
  question: { type: String },
  answer: { type: String },
},{timestamps: true});

const categorySchema = new Schema<Category>({
  title: { type: String },
},{timestamps: true});

const bannerImageSchema = new Schema<BannerImage>({
  public_id: { type: String },
  url: { type: String },
},{timestamps: true});

const layoutSchema = new Schema<Layout>({
  type: { type: String },
  faq: [faqSchema],
  categories: [categorySchema],
  banner: {
    image: bannerImageSchema,
    title: { type: String },
    subtitle: { type: String },
  }
},{timestamps: true});

const LayoutModel: Model<Layout> = mongoose.model<Layout>("Layout", layoutSchema);
export default LayoutModel
