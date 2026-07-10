import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";

export const metadata = {
  title: "Blog & Health Tips | Dr. Aman Jafar MD",
  description: "Read the latest health tips, wellness advice, and practice updates.",
};

export default function BlogPage() {
  const posts = [
    { title: "Tips for Flu Season", date: "Oct 15, 2023", excerpt: "Learn how to protect yourself and your family this flu season with these essential tips." },
    { title: "Managing Allergies", date: "Sep 02, 2023", excerpt: "Seasonal allergies can be tough. Here are strategies to manage your symptoms effectively." },
    { title: "Understanding Hypertension", date: "Aug 10, 2023", excerpt: "High blood pressure is a silent killer. Learn about the risks and how to control it." }
  ];

  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      <div className="flex-grow-1 section-padding bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">Health & Wellness Blog</h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Stay informed with our latest health tips and practice updates.
            </p>
          </div>
          <div className="row g-4">
             {posts.map((post, idx) => (
                <div className="col-md-4" key={idx}>
                   <div className="card h-100 border-0 shadow-sm glass-panel">
                      <div className="card-body d-flex flex-column">
                         <small className="text-primary mb-2 fw-semibold">{post.date}</small>
                         <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                         <p className="card-text text-muted flex-grow-1">
                            {post.excerpt}
                         </p>
                         <button className="btn btn-link text-primary p-0 text-start fw-bold text-decoration-none mt-3">Read More &rarr;</button>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
