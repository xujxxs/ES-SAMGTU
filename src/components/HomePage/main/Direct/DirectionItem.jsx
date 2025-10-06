export const DirectionItem = ({ id, image, name, code }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 w-full max-w-xs sm:max-w-sm lg:w-80 mx-auto sm:mx-2 lg:mx-4 border border-gray-100">
      <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="bg-white bg-opacity-90 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md border border-gray-200">
            {code}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 lg:h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-2 line-clamp-3 min-h-[60px] sm:min-h-[72px] lg:min-h-[84px]">
            {name}
          </h3>
          <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
            <span className="text-xs sm:text-sm">Бакалавриат</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">4 года</span>
          </div>

          <div className="flex items-center text-gray-500">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Очная форма</span>
          </div>
        </div>
      </div>
    </div>
  );
};
