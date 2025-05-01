import Card from "../components/Card";
import CutCornerButton from "../components/CutCornerButton";
import { Tag } from "../components/Tag";
import { getPostColorFromCategory } from "../utils/postUtils";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const LatestPosts = ({ latestPosts }) => {
  const targetRef = useRef(null);

  const {scrollYProgress}  = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  })

  const marginTop = useTransform(scrollYProgress, [0, 1], [-54, 64])

  return (
    <section className="py-60">
      <div className="container mx-auto text-amber-50">
        <h2 className="font-header font-black text-4xl md:text-5xl  text-center">
          You portal to everything blockchain.
        </h2>
        <p className="text-xl text-center text-zinc-400 m-8">
          Keep up with the latest news, trends, and insights in the blockchain
          world. Our blog covers a wide range of topics, from technology to
          finance, ensuring you stay informed.
        </p>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <div>
                  <Card
                    key={postIndex}
                    colorClass={getPostColorFromCategory(category)}
                    className={twMerge(
                      (postIndex === 1 || postIndex === 3) && "md:hidden"
                    )}
                    Buttontext={"Read more"}
                  >
                    <Tag
                      colorClass={getPostColorFromCategory(category)}
                      children={category}
                      className="text-xs"
                    />
                    <h3 className="font-heading font-black text-3xl mt-4">
                      {title}
                    </h3>
                    <p className="text-lg text-zone-400 mt-6">{description}</p>
                  </Card>
                </div>
              )
            )}
          </div>
          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            style={{
              marginTop,
            }}
            ref={targetRef}
          >
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <div>
                  <Card
                    key={postIndex}
                    colorClass={getPostColorFromCategory(category)}
                    className={twMerge(
                      (postIndex === 0 || postIndex === 2) && "md:hidden"
                    )}
                    Buttontext={"Read more"}
                  >
                    <Tag
                      colorClass={getPostColorFromCategory(category)}
                      children={category}
                      className="text-xs"
                    />
                    <h3 className="font-heading font-black text-3xl mt-4">
                      {title}
                    </h3>
                    <p className="text-lg text-zone-400 mt-6">{description}</p>
                  </Card>
                </div>
              )
            )}
          </motion.div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton children="Read the Blog" />
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
