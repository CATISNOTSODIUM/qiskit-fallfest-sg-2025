import { PartnerCardProps, PARTNERS } from "@/lib/constants";
import { Card, CardBody, Image } from "@heroui/react";

export default function Partner() {
  return (
    <div className="w-full px-6" id="Partners">
      <div className="text-4xl font-bold text-left mb-4">{"Partners"}</div>
       {
        PARTNERS.filter(partner => !partner.isProjectQuanta).map(
          (partner, idx) => <PartnerCard key={idx} {...partner}/>
        )
      }
      <hr className="border-white opacity-10"/>
      <Card
        isBlurred
        className="border-none w-full"
        shadow="none"
      >
        <CardBody className="w-full bg-[#4613AD] flex items-center px-10 pt-10">
          <Image
            alt="Album cover"
            src = {"images/project-quanta.jpg"}
            className="w-[200px] h-[120px] object-cover"
          />
      <div className="text-2xl font-bold text-left mb-4">{"Project Quanta - A collaboration between three universities in Singapore"}</div>

        </CardBody>
      </Card>
              {
        PARTNERS.filter(partner => partner.isProjectQuanta).map(
          (partner, idx) => <PartnerCard key={idx} {...partner}/>
        )
      }
    </div>
  );
}

function PartnerCard(props: PartnerCardProps) {
  const {imagePath, name, description, isProjectQuanta} = props;
  return (
    <Card
      isBlurred
      className="border-none max-w-[900px] py-5 bg-inherit"
      shadow="none"
    >
      <CardBody>
        <div className="flex flex-col md:flex-row col-span-12 gap-12 ">
          {/* Image Section */}
          <div className={`flex justify-center items-center md:w-1/3 ${props.isDark ? "bg-black" : "bg-white"} shadow-lg p-4 rounded-lg`}>
            <Image
              alt="Album cover"
              src = {imagePath}
              className="w-[200px] h-[120px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col md:w-2/3 ">
            <div className="flex flex-col gap-2">
              <h3 className={`font-semibold text-3xl ${isProjectQuanta ? "text-[#E4DBFF]" : "text-white"}`}>
                {name}
              </h3>
              <p className={`text-xl ${isProjectQuanta ? "text-[#B9B2CF]" : "text-default-500"}`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
