
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Climex Academy. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.62 1.925 2.423 3.32 4.564 3.358-1.796 1.408-4.073 2.246-6.548 2.246-.423 0-.84-.025-1.25-.074 2.324 1.493 5.076 2.364 7.994 2.364 9.593 0 14.85-7.952 14.85-14.85 0-.226-.005-.452-.015-.678.96-.69 1.798-1.557 2.457-2.54z" /></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.022.404-4.138 3.021-4.138 2.581 0 2.581 2.413 2.581 4.138v8.399h4.984v-10.183c0-5.434-2.862-7.817-6.521-7.817-3.218 0-4.432 1.711-5.024 3.235v-2.734z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
