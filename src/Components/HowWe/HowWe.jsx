import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../src/Components/HowWe/HowWe.css";
import img from "../../../src/assets/bg_how.png";

const HowWe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url(../../../src/assets/bg_how1.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="App">
          <div
            className="grids"
            style={{ paddingBottom: "60px", paddingTop: "60px" }}
          >
            <div data-aos="fade-up" className="boxx">
              <h1 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>HOW WE DO IT</b>
              </h1>
            </div>
            <div data-aos="fade-up" className="boxes">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>
                  Conversion of the digital audience into polls by using highly
                  effective social media approaches
                </b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Social media platforms have become popular as major
                communication channels that effectively contribute to shaping
                the media landscape in our country nowadays. A vast majority of
                public figures and consumer products have long been utilizing
                these cost-effective channels to reach out to their audience in
                communicating their views and advertising materials. Beyond
                communicating these views and materials, social media platforms
                make public figures humanize themselves and that helps their
                audience feel more connected to them.
                <br />
                <br />
                Did you know that Filipinos are the world’s top social media
                users, spending more than 4 hours every day on these sites? The
                top social media channels include Facebook, Twitter, and
                Instagram.
                <br />
                <br />
                By allowing your audience to be in touch with you through these
                sites is already a big step towards your success. The same goes
                on your end—to understand your audience and know how to reach
                out to them whenever the trends change. With the advanced
                targeting capabilities this platform offers plus a well-thought
                digital strategy, imagine reaching a vast number of potential
                audiences with just a fraction of the cost compared to
                traditional marketing.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Strategy development</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Having a solid social strategy is vital, part of which is
                choosing the most appropriate social platforms for the nature of
                your business as well as the target audience. There should be a
                clear impetus behind the choice. Testing and analyzing the most
                relevant platforms, as well as types of content, are fundamental
                to the process.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Optimization</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Getting on social media is paramount to kicking off the campaign
                in the right direction. Branding the accounts and pages is an
                important component of optimization. The use of social keywords
                to target the audience and content also contributes to achieving
                the goals of the campaign.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Campaign development and management</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Creating a social campaign from scratch is not without
                difficulties and what is more managing such. No two social
                campaigns are alike; not even for the same brand targeting two
                different platforms. The campaign, however, must be backed by
                research and analysis. Social listening is also crucial in the
                early stages of the campaign.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Paid ads and management</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Engaging a wider audience is also possible through boosting. The
                campaign shall start with social ads setup and be followed by
                reliable management of the setup of the sponsored posts.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Community building and management</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Social campaigns thrive because of the high engagement levels of
                the community members. Community building is fundamental in
                real-time campaign management.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Multimedia content creation and publication</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Each social channel has a unique content requirement. Limited
                are those pieces of content that can be used on multiple social
                sites. Content must be designed for a particular channel.
                Content policies and best practices also apply. The content
                published must help in spreading the intended message—it should
                be engaging and share-worthy.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Website Development</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Comprehensive web development project that aims to design,
                develop, and launch a modern and user-friendly website for your
                organization. From creating keyword-optimized content and
                increasing website traffic to improving online presence and
                implementing online strategies, we are adept at building
                targeted campaigns that produce record-high campaign response
                rates.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Research & Analysis</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                We always start with research and survey. This is to enable you
                to know how and what your target market thinks. We consider the
                social media channels that can be utilized effectively for your
                campaign. Likewise, we do background checks about your target
                audience and align our marketing approach to achieve gratifying
                results.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Active Engagement</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Your target audience knows about the big names in the world of
                social media such as Facebook, Twitter, and Instagram. We can
                help you make your brand the instant go-to that can give
                solutions whenever your audience needs help. Active engagement
                towards them, will not only create loyalty and consistency but
                will also increase your positive presence through client
                feedback, which becomes a natural marketing strategy.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Reporting & Evaluation</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Checking your insights for measurement is always an important
                element in any kind of marketing strategy. In this case, getting
                your social media insights is like make-or-break information
                that will help you conclude what to do next. We use specific
                analytics tools to measure results and evaluate them according
                to the performance of the campaign and your brand marketing
                efforts.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Brand Recall</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                We may be in the digital world but traditional marketing
                collaterals still play a big role in establishing your business
                and brand. Prodigious can create logos, business cards,
                catalogs, brochure designs, website banners, flyers, product
                mock-ups, 3D designs for printing, and a lot more. The business
                goals and ideals must be represented across all mediums, may it
                be minimalist or grand. Note that brand recall is what we are
                aiming for.
              </h5>
            </div>
            <div data-aos="fade-up" className="bo">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Video Editing</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                Give your business the wow factor through informative videos.
                Prodigious can help you produce high-quality audio-visual
                presentations, technical explainer videos, and advertisement
                videos. This is ideal to have for client meetings, corporate
                presentations, and events for that extra oomph. Likewise, the
                Team has been handling vlogs for public figures for social media
                postings and has garnered positive feedback throughout its
                existence.
              </h5>
            </div>
            <div data-aos="fade-up" className="box">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Content writing service</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                We craft well-written content to engage your audience through
                your brand messaging. Having engaging content may sound easy but
                it requires thorough research and understanding of the industry
                to be able to come up with compelling write-ups and visuals that
                will appeal to your target audience.
              </h5>
            </div>
            <div data-aos="fade-up" className="boxe">
              <h4 className="" style={{ textAlign: "center", margin: "20px" }}>
                <b>Special Event Photography and Videography</b>
              </h4>
              <h5 className="" style={{ textAlign: "justify", margin: "20px" }}>
                We likewise provide event photography, commonly known as
                corporate photography. It is one of the most primitive ways to
                showcase your business and product. Often said, a picture speaks
                a thousand words. Here at Prodigious, we embrace Perfection and
                Affordability. Equipped with experiences, skills, and facilities
                for the task, our Team of imaginative and creative individuals
                can compete in this industry with the same quality of output but
                at much more affordable rates.
                <br />
                <br />
                With our well-equipped setup for video production, any type of
                Videography is at our fingertips. Our Team of video production
                crew led by our creative director, will showcase the best
                moments. It takes plenty of show experience to deliver an
                excellent level of presentation. From seminar, conference, press
                release, concert, music performance, play to even wedding, you
                will receive video highlights that you will be proud of.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWe;
