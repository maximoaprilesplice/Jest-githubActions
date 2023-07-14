import React from "react";

const FullWidthCTA = ({
  imageURL,
  title,
  content,
  ctaList,
  backgroundColor,
  textColor,
}) => {
  return (
    <section className="flex justify-center">
      <div className="container-x !px-0 ">
        <div
          id="background"
          title="background"
          className="bg-cover bg-no-repeat bg-center flex justify-center"
          style={{
            backgroundColor: backgroundColor ? backgroundColor : "#fff",
            backgroundImage: imageURL && `url(${imageURL})`,
          }}
        >
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 container-x">
            <div className="mx-auto flex flex-col items-center max-w-2xl text-center">
              {title && (
                <h2
                  style={{ color: textColor }}
                  className=" max-w-3xl text-white "
                >
                  {title}
                </h2>
              )}
              {content && (
                <div
                  style={{ color: textColor }}
                  className="mx-auto mt-6 max-w-xl text-lg leading-8"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              )}

              {/* {ctaList && (
                <div className="flex justify-center flex-wrap mt-6 gap-3 xsm:gap-6 ">
                  {ctaList.map((cta, key) => (
                    <Button
                      key={key}
                      title={cta?.title}
                      target={cta?.target}
                      url={cta?.url}
                    />
                  ))}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthCTA;
