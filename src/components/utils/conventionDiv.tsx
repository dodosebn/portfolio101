
interface ConventionDivProps {
  h3content: string;
  pcontent: string;
  variant?: "green" | "gold";
}

const ConventionDiv = ({
  h3content,
  pcontent,
  variant = "gold",
}: ConventionDivProps) => {
  const h3Class =
    variant === "green"
      ? "text-3xl md:text-4xl font-bold text-green-500"
      : "text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent";

  return (
    <div className="flex flex-col items-center cursor-pointer p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className={h3Class}>{h3content}</h3>
      <p className="text-lg mt-2 font-semibold text-gray-700 dark:text-gray-300">
        {pcontent}
      </p>
    </div>
  );
};

export default ConventionDiv;
