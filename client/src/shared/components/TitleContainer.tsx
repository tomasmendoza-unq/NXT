export const TitleContainer = ({ title }: { title: string }) => {
    return (
        <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <div className="w-16 h-1 bg-blue-600 mt-2 rounded"></div>
        </div>
    );
};
