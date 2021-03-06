/*
 * Copyright (c) 2010, rajthilak
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 3. Neither the name of SCM-Manager; nor the names of its
 *    contributors may be used to endorse or promote products derived from this
 *    software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * http://bitbucket.org/sdorra/scm-manager
 *
 */


Ext.ns('Sonia.megamhook');


Sonia.megamhook.I18n = {
  
  // labels
  formTitleText: 'Megam',
  colEmail: 'Email',
  colApiKey: 'apikey',
  colAppName: 'appname',
  colEveryCommitText: 'Execute on every commit',
  colSendCommitData: 'Send commit data',
  addText: 'Add',
  removeText: 'Remove',
  
  // help
  megamhookGridHelpText: 'Add and remove MegamHooks for your repositories. \n\
    The "Url Pattern" column specifies the url of the remote website. \n\
    You can use patterns like ${repository.name} for the url.\n\
    If you enable the "Execute on every commit" checkbox, then is the specified \n\
    url triggert for each commit in a push. \n\
    If the checkbox is disabled the url is triggert once in a push.',
  
  // icons
  addIcon: 'resources/images/add.gif',
  removeIcon: 'resources/images/delete.gif',
  helpIcon: 'resources/images/help.gif'
};

Sonia.megamhook.createColModel = function(){
  return new Ext.grid.ColumnModel({
    defaults: {
      sortable: false,
      editable: true
    },
    columns: [{
      id: 'email',
      dataIndex: 'email',
      header: Sonia.megamhook.I18n.colEmail,
      editor: Ext.form.TextField
    },{
       id: 'apikey',
       dataIndex: 'apikey',
       header: Sonia.megamhook.I18n.colApiKey,
       editor: Ext.form.TextField
    },{
       id: 'appname',
       dataIndex: 'appname',
       header: Sonia.megamhook.I18n.colAppName,
       editor: Ext.form.TextField
    },{
      id: 'executeOnEveryCommit',
      xtype: 'checkcolumn',
      dataIndex: 'executeOnEveryCommit',
      header: Sonia.megamhook.I18n.colEveryCommitText
    }/*,{
      id: 'sendCommitData',
      xtype: 'checkcolumn',
      dataIndex: 'sendCommitData',
      header: Sonia.megamhook.I18n.colSendCommitData
    }*/]
  });
};

Sonia.megamhook.createRowSelectionModel = function(){
  return new Ext.grid.RowSelectionModel({
    singleSelect: true
  });
};

// register repository panel
Sonia.repository.openListeners.push(function(repository, panels){
  if (Sonia.repository.isOwner(repository)){
    panels.push({
      xtype: 'megamhookRepositoryPanel',
      item: repository
    });
  }
});

// register global panel
registerGeneralConfigPanel({
  id: 'megamhookGlobalPanel',
  xtype: 'megamhookGlobalPanel'
});
