import { useForm } from '../../hooks/useFormUsers';

export const Register = ({ handleToggle }) => {

    const { handleChange, handleSubmit, error } = useForm('')

    

    return (
        <>
            <div className="w-full h-full flex items-center justify-end">
                <div className="bg-backgroundZelda w-full max-w-md h-full px-6 py-8">
                    <h1 className="text-zyellow font-bold leading-tight mb-4">Regístrate</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-zyellow text-sm">Nombre de usuario</label>
                            <input type="text" name="username" id="username" placeholder="Introduce tu nombre" className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus
                                onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-zyellow text-sm">Correo electrónico</label>
                            <input type="text" name="email" id="email" placeholder="Introduce tu correo" className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label className="block text-zyellow text-sm">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="Contraseña" className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm"
                                onChange={handleChange} />
                        </div>
                        {error &&
                        <p className="mt-8 text-red-600">
                            {error}
                        </p>}
                        <button type="submit" className="w-full block bg-zyellow hover:bg-zbgcosa focus:bg-zbrown text-white font-semibold rounded-lg px-4 py-2">Regístrate</button>
                    </form>

{/* 
                    <button type="button" className="w-full block bg-zyellow hover:bg-zbgcosa focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-zbrown mt-6">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                            <span className="ml-4 text-white">
                                Entra con Google
                            </span>
                        </div>
                    </button> */}
                    <div className='text-right'>
                    <p className="mt-8 text-zyellow">¿Ya tienes cuenta?</p>
                        <button onClick={handleToggle} className="text-zyellow hover:text-white font-semibold">Entra aquí con tu cuenta</button>
                    </div>

                </div>
            </div>
        </>
    )
}
