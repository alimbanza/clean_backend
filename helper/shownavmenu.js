module.exports = {
    shownavmenu:(typeuser)=>{

      typeuser = parseInt(typeuser);

      let menu = "";
	    if(typeuser == 0){
            menu=`
              <li class="nav-item item-menu">
          <a class="nav-link over-link <%= dashboard %>" href="/">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
          </a>
         </li>
            <li class="nav-item item-menu">
                <a class="nav-link over-link <%= user %>" href="/user/">
                  <span class="menu-title">Utilisateur</span>
                  <i class="mdi  mdi-account   menu-icon"></i>
                </a>
             </li>
             <li class="nav-item item-menu">
               <a class="nav-link over-link  <%= agence %>" href="/agence/">
                 <span class="menu-title">Agence</span>
                 <i class="mdi   mdi-account-card-details menu-icon"></i>
               </a>
            </li
        `;
      }else if(typeuser == 1){
           menu=`
            <li class="nav-item item-menu">
              <a class="nav-link over-link <%= dashboard %>" href="/">
              <span class="menu-title">Dashboard</span>
              <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item item-menu">
                <a class="nav-link over-link <%= membre %>" href="/membre/">
                  <span class="menu-title">Membre</span>
                  <i class="mdi   mdi-account-box   menu-icon"></i>
                </a>
             </li>
             <li class="nav-item item-menu">
                <a class="nav-link over-link <%= wallet %>" href="/wallet/">
                  <span class="menu-title">Wallet</span>
                  <i class="mdi   mdi-account-box   menu-icon"></i>
                </a>
             </li>
        `;
      }else if(typeuser == 2){
                  menu=`
              <li class="nav-item item-menu">
          <a class="nav-link over-link <%= dashboard %>" href="/">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
          </a>
         </li>
          <li class="nav-item item-menu">
                <a class="nav-link over-link <%= organisation %>" href="/organisation/">
                  <span class="menu-title">Partennaires</span>
                  <i class="mdi  mdi-bank  menu-icon"></i>
                </a>
            </li>
            <li class="nav-item item-menu">
                <a class="nav-link over-link <%= user %>" href="/user/">
                  <span class="menu-title">Utilisateur</span>
                  <i class="mdi  mdi-account   menu-icon"></i>
                </a>
             </li>
            <li class="nav-item item-menu">
               <a class="nav-link over-link  <%= agent %>" href="/agent/">
                 <span class="menu-title">Agent Cash</span>
                 <i class="mdi   mdi-account-card-details menu-icon"></i>
               </a>
            </li>
            <li class="nav-item item-menu">
               <a class="nav-link over-link  <%= personnel %>" href="/personnel/">
                 <span class="menu-title">Personnel</span>
                 <i class="mdi   mdi-account-card-details menu-icon"></i>
               </a>
            </li>
            <li class="nav-item item-menu">
               <a class="nav-link over-link  <%= transaction %>" href="/transaction/sms/">
                 <span class="menu-title">Transactions</span>
                 <i class="mdi   mdi-account-card-details menu-icon"></i>
               </a>
            </li>
        `;
      }else if(typeuser == 3){
                  menu=`
            <li class="nav-item item-menu">
                <a class="nav-link over-link <%- organisation %>" href="/agent/dashboard/">
                  <span class="menu-title">Dashboard</span>
                  <i class="mdi  mdi-home  menu-icon"></i>
                </a>
            </li> 
            <li class="nav-item item-menu">
               <a class="nav-link over-link  <%= transaction %>" href="/transaction/">
                 <span class="menu-title">Transactions</span>
                 <i class="mdi   mdi-account-card-details menu-icon"></i>
               </a>
            </li>

            <li class="nav-item item-menu">
                  <a class="nav-link over-link <%- depot %>" href="/transaction/depot/">
                    <span class="menu-title">Depôt</span>
                    <i class="mdi  mdi-home  menu-icon"></i>
                  </a>
            </li>
            <li class="nav-item item-menu">
                <a class="nav-link over-link <%- depot %>" href="/transaction/retrait/">
                  <span class="menu-title">Retrait</span>
                  <i class="mdi  mdi-home  menu-icon"></i>
                </a>
            </li>
            <li class="nav-item item-menu">
                    <a class="nav-link over-link <%- depot %>" href="/agent/retrait/">
                      <span class="menu-title">Transactions</span>
                      <i class="mdi   mdi-gauge  menu-icon"></i>
                    </a>
            </li>
            <li class="nav-item item-menu">
                  <a class="nav-link over-link <%- depot %>" href="/agent/retrait/">
                    <span class="menu-title">Commissions</span>
                    <i class="mdi  mdi-arrow-left-bold-hexagon-outline menu-icon"></i>
                  </a>
            </li>
        `;
      }else if(typeuser == 4){
                  menu=`
              <li class="nav-item item-menu">
          <a class="nav-link over-link <%= dashboard %>" href="/">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
          </a>
         </li>
             <li class="nav-item item-menu">
                <a class="nav-link over-link  <%= compte %>" href="/compte/">
                  <span class="menu-title">Compte</span>
                  <i class="mdi   mdi-account-card-details menu-icon"></i>
                </a>
             </li>
        `;
      }

      return menu;
    }
 }
