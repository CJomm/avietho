import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../Components/PracticeAreas/PracticeAreas.css";
import paa from "../../../src/assets/paa1.png";

const PracticeAreas = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="skel">
      <div data-aos="zoom-in">
        <div className="book">
          <input type="checkbox" id="c1" />
          <input type="checkbox" id="c2" />
          <input type="checkbox" id="c3" />
          <input type="checkbox" id="c4" />
          <div id="cover">
            <img src={paa} alt="" />
          </div>
          <div className="flip-book">
            <div className="flip" id="p1">
              <div className="front">
                <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
                  <b>
                    AVIETHO DIGITAL MARKETING <br />
                    PRACTICE AREAS
                  </b>
                </h2>
                <label className="next-btn" htmlFor="c1">
                  Next
                </label>
              </div>
              <div className="back">
                <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
                  Public Affairs & Government
                </h2>
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "5px",
                    paddingLeft: "10px",
                  }}
                >
                  Our practice area in the field of public relations involves
                  managing the communication and relationships between
                  organizations and government entities, including regulatory
                  bodies, policymakers, and elected officials. This practice
                  area focuses on shaping public policy, managing government
                  relations, and advocating for the interests and positions of
                  the organization. Some key activities within public affairs
                  and government practice include:
                  <br />
                  <br />
                  <b>Government Relations: </b>Building and nurturing
                  relationships with government officials, policymakers, and
                  regulatory authorities to influence policy-making processes,
                  secure support for legislative initiatives, and address
                  regulatory concerns.
                  <br />
                  <br />
                  <b>Public Policy Advocacy: </b>Developing strategies to
                  advocate for the organization's interests and positions on
                  relevant public policy issues. This includes providing expert
                  analysis, engaging in public consultations, participating in
                  policy debates, and shaping legislative proposals.
                  <br />
                  <br />
                </p>
                <label className="back-btn" htmlFor="c1">
                  Back
                </label>
              </div>
            </div>
            <div className="flip" id="p2">
              <div className="back">
                <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
                  Digital PR
                </h2>
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "5px",
                    paddingLeft: "10px",
                  }}
                >
                  Our practice area within public relations that focuses on
                  utilizing digital channels and online platforms to create,
                  manage, and maintain a positive brand reputation, build
                  relationships with key audiences, and amplify messaging and
                  communications efforts. It involves leveraging digital
                  strategies, tools, and techniques to effectively connect and
                  engage with target audiences and stakeholders in the online
                  space. Some key activities within the digital PR practice area
                  include:
                  <br />
                  <br />
                  <b>Online Reputation Management: </b>Monitoring and managing
                  an organization's online reputation through proactive brand
                  monitoring, addressing negative sentiment or reviews, and
                  fostering positive online conversations about the brand.
                  <br />
                  <br />
                  <b>Influencer Engagement: </b>Identifying and building
                  relationships with online influencers, bloggers, content
                  creators, and social media personalities to expand the reach
                  and credibility of brand messages and secure endorsements or
                  collaborations.
                </p>
                <label className="back-btn" htmlFor="c2">
                  Back
                </label>
              </div>
              <div className="front">
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "10px",
                  }}
                >
                  <b>Political Campaign Support: </b>Providing support to
                  political campaigns by leveraging the expertise of public
                  affairs professionals in areas such as message development,
                  media relations, grassroots mobilization, and voter outreach.
                  <br />
                  <br />
                  <b>Issue Management:</b> Helping organizations and individuals
                  navigate complex and contentious issues by developing
                  strategies to address public concerns, engage stakeholders,
                  and manage reputational risks.
                  <br />
                  <br />
                  <b>Coalition Building: </b>Forming alliances and coalitions
                  with other organizations, interest groups, or industry
                  associations to amplify voices and influence policy outcomes.
                  This involves coordinating joint advocacy efforts, resource
                  sharing, and collaborative strategies.
                  <br />
                  <br />
                  <b>Political Risk Assessment:</b> Analyzing political
                  landscapes and assessing potential risks and uncertainties
                  that could impact an organization's operations or policy
                  goals. This includes monitoring political developments,
                  assessing the implications of political changes, and providing
                  strategic advice.
                </p>
                <label className="next-btn" htmlFor="c2">
                  Next
                </label>
              </div>
            </div>
            <div className="flip" id="p3">
              <div className="back">
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "5px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <b>Online Events and Campaigns: </b>Organizing and promoting
                  online events, webinars, live chats, or virtual conferences to
                  engage with target audiences, generate buzz, and drive brand
                  awareness. This also includes executing digital marketing
                  campaigns to support specific PR objectives.
                  <br />
                  <br />
                  <b>Measurement and Analytics: </b>Utilizing digital tools and
                  analytics platforms to track and measure the impact of digital
                  PR efforts, including website traffic, social media
                  engagement, online mentions, reach, and sentiment analysis.
                  These insights help refine strategies and demonstrate the
                  value of digital PR initiatives.
                  <br />
                  <br />
                  The integration of traditional PR principles with digital
                  tactics and platforms is significant to effectively
                  communicate and engage with audiences in the digital age. It
                  allows brands to leverage the power of online platforms,
                  social media, and content marketing to establish thought
                  leadership, boost brand visibility, and foster positive
                  relationships with stakeholders. By effectively utilizing
                  digital PR strategies, organizations can enhance their
                  reputation, broaden their reach, and drive meaningful
                  engagement with their target audiences in the online space.
                </p>
                <label className="back-btn" htmlFor="c3">
                  Back
                </label>
              </div>
              <div className="front">
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "10px",
                  }}
                >
                  <b>Social Media Management: </b>Developing and implementing
                  social media strategies to effectively engage with target
                  audiences, build brand visibility, and foster meaningful
                  relationships. This includes content creation, community
                  management, social listening, and analytics tracking.
                  <br />
                  <br />
                  <b>Content Marketing and Distribution: </b> Creating and
                  distributing high-quality, engaging, and shareable content
                  that aligns with the brand's messaging and objectives. This
                  can include blog posts, articles, videos, infographics, and
                  other forms of digital content.
                  <br />
                  <br />
                  <b>Online Media Relations: </b>Building relationships with
                  online journalists, bloggers, and digital media outlets to
                  secure online media coverage and mentions of the brand or its
                  products/services. This includes media pitching, press release
                  distribution, and online press conferences.
                  <br />
                  <br />
                  <b>Crisis Management in the Digital Space: </b> Developing
                  strategies and response plans to address and mitigate
                  potential crises or negative online situations, including
                  managing social media crises, addressing negative reviews or
                  comments, and implementing damage control measures.
                </p>
                <label className="next-btn" htmlFor="c3">
                  Next
                </label>
              </div>
            </div>
            <div className="flip" id="p4">
              <div className="back">
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <b>Keyword Research: </b> Identifying relevant keywords and
                  search terms that are associated with the brand or individual
                  and are likely to be used by search engine users when looking
                  for information.
                  <br />
                  <br />
                  <b>Content Creation and Optimization: </b>Creating and
                  optimizing various types of content, such as blog posts,
                  articles, press releases, and social media profiles, to
                  improve their visibility in search engine results. This
                  includes incorporating relevant keywords in the content and
                  optimizing meta tags, headings, and URLs for better SEO
                  performance.
                  <br />
                  <br />
                  <b>Link Building: </b>Acquiring high-quality, authoritative
                  backlinks to positive content and leveraging them to increase
                  the visibility and credibility of that content in search
                  engine rankings. This can include working with media outlets,
                  industry publications, and influential websites to secure
                  positive coverage and link placements.
                  <br />
                  <br />
                  <b>Online Review Management: </b>Monitoring and responding to
                  customer reviews and feedback on various review platforms and
                  websites. This includes addressing negative reviews and
                  encouraging satisfied customers to share their
                </p>
                <label className="back-btn" htmlFor="c4">
                  Back
                </label>
              </div>
              <div className="front">
                <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
                  ONLINE REPUTATION MANAGEMENT
                </h2>
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "10px",
                  }}
                >
                  SEO online reputation management is a specific aspect of
                  digital PR that focuses on utilizing search engine
                  optimization (SEO) techniques to manage and improve an
                  organization's online reputation. It involves optimizing
                  search engine results pages (SERPs) to promote positive
                  content, suppress negative content, and ensure that search
                  engine users are presented with accurate and favorable
                  information about the brand or individual.
                  <br />
                  <br />
                  <b>Content Marketing and Distribution: </b> Creating and
                  distributing high-quality, engaging, and shareable content
                  that aligns with the brand's messaging and objectives. This
                  can include blog posts, articles, videos, infographics, and
                  other forms of digital content.
                  <br />
                  <br />
                  Some key strategies and tactics involved in SEO online
                  reputation management include:
                </p>
                <label className="next-btn" htmlFor="c4">
                  Next
                </label>
              </div>
            </div>
            <div className="flip" id="p5">
              <div className="front">
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "10px",
                  }}
                >
                  positive experiences, which can help improve the overall
                  reputation.
                  <br />
                  <br />
                  <b>Social Media Optimization: </b> Optimizing social media
                  profiles and posts to improve their visibility in search
                  engine results. This involves using relevant keywords in
                  social media bios, captions, and content, as well as engaging
                  with followers and managing online conversations to promote a
                  positive online presence.
                  <br />
                  <br />
                  <b>Online PR and Content Distribution: </b> Leveraging digital
                  PR strategies to create and distribute positive and optimized
                  content across various online platforms, such as press
                  releases, articles, and guest blogs. This helps in influencing
                  search results and creating a stronger online reputation.
                  <br />
                  <br />
                  <b>Monitoring and Analysis: </b> Continuously monitoring
                  search engine results and online mentions to track the
                  effectiveness of SEO online reputation management efforts.
                  This includes using analytics tools and sentiment analysis to
                  assess the impact of different strategies and make informed
                  adjustments as needed.
                  <br />
                  <br />
                </p>
                <label className="next-btn" htmlFor="c5">
                  Next
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
