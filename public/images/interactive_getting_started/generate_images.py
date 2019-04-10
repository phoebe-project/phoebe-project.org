import phoebe
b=phoebe.default_binary()
b.add_dataset('lc', times=phoebe.linspace(0,2,101))
b.add_dataset('rv', times=phoebe.linspace(0,2,101))


for teff in [6000,5000]:
    for q in [1.0, 0.75]:
        b['teff@secondary'] = teff
        b['q@binary'] = q

        b.run_compute()

        s_teff = 'no' if teff==6000 else 'yes'
        s_q = 'no' if q==1.0 else 'yes'
        print("q={} teff={}".format(s_q, s_teff))

        b['lc01'].plot(tight_layout=True, save='teff:{}_q:{}_phase:no_rv:no.png'.format(s_teff, s_q))
        b.plot(tight_layout=True, save='teff:{}_q:{}_phase:no_rv:yes.png'.format(s_teff, s_q))

        b['lc01'].plot(x='phases', tight_layout=True, save='teff:{}_q:{}_phase:yes_rv:no.png'.format(s_teff, s_q))
        b.plot(x='phases', tight_layout=True, save='teff:{}_q:{}_phase:yes_rv:yes.png'.format(s_teff, s_q))
