src
    /app
        layout.tsx
        global.css
        error.tsx
        not-found.tsx

        /(with-user-not-authenticated)
            /login
                page.tsx
            
            /signup
                page.tsx

            page.tsx
            layout.tsx
        
        /(with-user-authenticated)
            layout.tsx
            /categories
                page.tsx
                /[categoryId]
                    page.tsx
                    /edit
                        page.tsx

            /faqs
                page.tsx
                /[faqId]
                    page.tsx
                    /edit
                        page.tsx

            /dashboard
                page.tsx

            /settings
                page.tsx

