import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";

export const AllBlogsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            author
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    { console.log(data) }
    { 
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter;

        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })
    }
  </Layout>
);



export default Blog;