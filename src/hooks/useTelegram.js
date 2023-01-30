const tg = window.Telegram.WebApp

export const useTelegram = () => {

    const onClose = () => {
        tg.close()
    }

    return {
        tg,
        onClose,
        user: tg.initData?.user?.username
    }
}