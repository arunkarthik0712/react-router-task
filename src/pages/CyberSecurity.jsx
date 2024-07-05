// src/pages/CyberSecurity.jsx
import blogs from "../data/blogs";

function CyberSecurity() {
  return (
    <div className="row">
      {blogs.cybersecurity.map((blog) => (
        <div className="col-md-4 mb-4" key={blog.id}>
          <div className="card">
            <img src={blog.image} className="card-img-top" alt={blog.title} />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text text-end">read more></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CyberSecurity;