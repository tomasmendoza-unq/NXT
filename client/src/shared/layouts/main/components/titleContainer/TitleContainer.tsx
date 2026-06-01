export const TitleContainer = ({ title }: { title: string }) => {
    return (
        <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
            <div className="w-20 h-1.5 bg-blue-600 mt-3 rounded"></div>
        </div>
    );
};
