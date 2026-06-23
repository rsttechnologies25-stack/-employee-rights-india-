export default function PageHero({ title, subtitle, icon: Icon, gradient = 'primary', children }) {
    const gradients = {
        primary: 'from-primary to-[#1e3a8a]',
        accent: 'from-accent to-[#9a3412]',
        success: 'from-emerald-600 to-emerald-800',
        danger: 'from-red-600 to-red-800',
        purple: 'from-purple-600 to-purple-900',
        teal: 'from-teal-600 to-teal-800',
    };

    return (
        <section className={`bg-gradient-to-br ${gradients[gradient] || gradients.primary} py-16 px-4`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-start gap-4 mb-4">
                    {Icon && (
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                    )}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
                {children && <div className="mt-6">{children}</div>}
            </div>
        </section>
    );
}
