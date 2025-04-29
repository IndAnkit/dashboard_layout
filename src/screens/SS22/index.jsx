import Building from "@/components/Building";
import StyledTabs from "@/components/StyledTabs";

const FloorComponent = () => <div>Floor Content</div>;
const APComponent = () => <div>AP Layer Content</div>;

const SS22 = ({ networkId = 22 }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <StyledTabs
          tabs={{
            building: {
              id: "building",
              label: `Building – ${23}`,
              RenderComponent: Building, // replace with actual component
            },
            floor: {
              id: "floor",
              label: "Floor Layer",
              RenderComponent: FloorComponent, // replace with actual component
            },
            ap: {
              id: "ap",
              label: "AP Layer",
              RenderComponent: APComponent, // replace with actual component
            },
          }}
          networkId={networkId}
        />
      </div>
      <div>
        <div
          className={`cursor-pointer relative top-0 px-12 py-2 ${"bg-blue-500 shadow-2xl"} text-white flex items-center justify-center font-semibold `}
          style={{
            left: -0 * 45,
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)",
          }}
        >
          My Connection
        </div>
      </div>
    </div>
  );
};

export default SS22;
