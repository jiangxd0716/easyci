package com.easyci.ci.api.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class GitlabGroup {

    public static final String URL = "/groups";

    private Integer id;
    private String name;
    private String path;

    @JsonProperty("ldap_cn")
    private String ldapCn;

    @JsonProperty("ldap_access")
    private Integer ldapAccess;

    @JsonProperty("shared_projects")
    private List<GitlabProject> sharedProjects;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getLdapCn() {
        return ldapCn;
    }

    public void setLdapCn(String ldapCn) {
        this.ldapCn = ldapCn;
    }

    public GitlabAccessLevel getLdapAccess() {
        if (ldapAccess == null) {
            return null;
        }
        return GitlabAccessLevel.fromAccessValue(ldapAccess);
    }

    public void setLdapAccess(GitlabAccessLevel ldapGitlabAccessLevel) {
        if (ldapGitlabAccessLevel != null) {
            this.ldapAccess = ldapGitlabAccessLevel.accessValue;
        }
    }

    public List<GitlabProject> getSharedProjects() {
        return sharedProjects;
    }

    public void setSharedProjects(List<GitlabProject> sharedProjects) {
        this.sharedProjects = sharedProjects;
    }
}
