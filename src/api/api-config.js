const apiConfig = async(pathname)=>{
    const BASE_URL = 'https://22.objects.htmlacademy.pro/task-manager';

    const resposce = await fetch(`${BASE_URL}${pathname}`, {
        headers:{
            'Content-Type':'application/json',
            Authorization:'Basic hS2sfS44wcl1sa2j',
        },
    })
    if (!resposce.ok){
        const error=new Error('ошибка при загрузке данных')
        error.status = resposce.status
        throw error
    }

    return resposce.json()
}

export default apiConfig